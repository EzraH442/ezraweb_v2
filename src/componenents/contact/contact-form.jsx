import React from "react";
import * as styles from "./contact-form.module.css";

const axios = require("axios");

export default class ContactForm extends React.Component {
    signal = axios.CancelToken.source();

    siteKey = "6Le1iisaAAAAAGW7-lA_PoCubVTHxxOYBJUoc83X";

    catpchaLink = "https://www.google.com/recaptcha/api.js?render=6Le1iisaAAAAAGW7-lA_PoCubVTHxxOYBJUoc83X";

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            subject: "",
            email: "",
            message: "",
            token: "",
        };
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = this.catpchaLink;
        document.body.appendChild(script);
        window.handleSubmit = this.handleSubmit;
    }

    componentWillUnmount() {
        this.signal.cancel("Post req cancelled");
    }

    handleInputChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = () => {
        window.grecaptcha.ready(() => {
            window.grecaptcha
                .execute(this.siteKey, { action: "submit" })
                .then((token) => {
                    this.setState({ token });
                    const data = JSON.stringify(this.state);
                    this.submit(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    };

    submit(data) {
        const headers = {
            Accept: "application/json; charset=utf-8",
            "Content-Type": "application/json; charset=UTF-8",
        };
        console.log(data);
        axios.post("https://hcj7ux2476.execute-api.us-east-1.amazonaws.com/Prod", data, headers, {
            cancelToken: this.signal.token,
        })
            .then((res) => {
                console.log(res);
                if (res.target.status === 200) {
                    console.log("success");
                } else {
                    console.log(`fail, status code: ${res.target.status}`);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h1 className={styles.title}>contact </h1>
                <h2>Send me an email:</h2>
                <form>
                    <input type="text" name="name" onChange={this.handleInputChange} placeholder="Name" />
                    <input type="text" name="subject" onChange={this.handleInputChange} placeholder="Subject" />
                    <input type="email" name="email" onChange={this.handleInputChange} placeholder="Your Email" />
                    <textarea type="text" name="message" onChange={this.handleInputChange} placeholder="Message" />
                    <button type="submit" data-callback="handleSubmit" className="g-recaptcha" data-size="invisible" data-sitekey={this.siteKey}>Submit</button>
                </form>
                <p className={styles.privatePolicy}>
                    This site is protected by reCAPTCHA and the Google
                    {" "}
                    <a href="https://policies.google.com/privacy">Privacy Policy</a>
                    {" "}
                    and
                    {" "}
                    <a href="https://policies.google.com/terms">Terms of Service</a>
                    {" "}
                    apply.
                </p>
            </div>

        );
    }
}
