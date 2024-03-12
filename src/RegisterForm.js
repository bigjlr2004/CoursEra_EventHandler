import { useState } from "react";

export default function RegisterForm(props) {
  return (
    <>
      <label>
        First name:
        <input
          value={props.form.firstName}
          onChange={(e) => {
            props.setForm({
              ...props.form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={props.form.lastName}
          onChange={(e) => {
            props.setForm({
              ...props.form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={props.form.email}
          onChange={(e) => {
            props.setForm({
              ...props.form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {props.form.firstName} {props.form.lastName} ({props.form.email})
      </p>
    </>
  );
}
