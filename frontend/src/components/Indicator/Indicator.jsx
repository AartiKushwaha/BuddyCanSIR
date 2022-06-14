import React from "react";
import "./indicator.css";

export default function Indicator({ step }) {

    return (
        <>
            <div class="indicator-container">
                <section class="step-indicator">
                    <div class="step step1 active">
                        <div class="step-icon">1</div>
                        <p>Raise a request</p>
                    </div>
                    <div class="indicator-line active" 
                    style={{ background: step == 2 ? '#3AB255': '#c2c2c2'}}>
                    </div>
                    <div class="step step2">
                        <div class="step-icon" style={{ background: step == 2 ? '#3AB255': '#c2c2c2'}}>2</div>
                        <p style={{ color : step == 2 ? '#3AB255': '#c2c2c2'}}>Upload documents</p>
                    </div>
                </section>
            </div>
        </>
    );
}
