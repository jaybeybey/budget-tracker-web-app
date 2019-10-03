import React from 'react';
import './styles.css';

export const FormInput = ({ label, name, type, onChange }) => (
    <div className="form-input">
        <label>{label}</label>
        <input
            className="input"
            name={name}
            type={type}
            onChange={onChange}
        />
    </div>
);

export const FormTextArea = ({ label, name, placeholder, onChange }) => (
    <>
        <label>{label}</label>
        <textarea className="form-textarea" name={name} placeholder={placeholder} onChange={onChange} />
    </>
);

export const FormButton = ({ children, ...props }) => (
    <button className="form-btn" {...props}>{children}</button>
);

export const FormSelect = ({ label, name, onChange, children }) => (
    <div className="form-input">
        <label>{label}</label>
        <select className="input" name={name} onChange={onChange}>
            {children}
        </select>
    </div>
);

export const FormGroup = ({ legend, children }) => (
    <fieldset className="form-group">
        <legend>{legend}</legend>
        {children}
    </fieldset>
);
