import React from 'react';
import './styles.css';

export const FormInput = ({ label, value, name, type, onChange }) => (
    <div className="form-input">
        <label>{label}</label>
        <input
            className="input"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
        />
    </div>
);

export const FormTextArea = ({ label, name, value, placeholder, onChange }) => (
    <>
        <label>{label}</label>
        <textarea className="form-textarea" name={name} placeholder={placeholder} onChange={onChange} value={value} />
    </>
);

export const FormButton = ({ children, ...props }) => (
    <button className="form-btn" {...props}>{children}</button>
);

export const EditButton = ({ children, ...props }) => (
    <button className="edit-form-btn" {...props}>{children}</button>
);

export const FormSelect = ({ label, name, value, onChange, children }) => (
    <div className="form-input">
        <label>{label}</label>
        <select className="input" name={name} value={value} onChange={onChange}>
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
