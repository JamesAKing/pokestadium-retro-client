import React from 'react';

function FormInput() {
    return (
        <label htmlFor="input">
            <p>Label Heading</p>
            <input type="text" name="input" />
            <div>
                <p>error message</p>
            </div>
        </label>
    );
}

export default FormInput;