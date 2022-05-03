import { Form, Formik } from "formik";
import { Button } from "semantic-ui-react";
import FrmTextInput from "../../app/common/form/FrmTextInput";

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <FrmTextInput name="email" placeholder="Email" />
          <FrmTextInput
            name="password"
            placeholder="Password"
            type="password"
          />
          <Button positive content="Login" type="submit" fluid />
        </Form>
      )}
    </Formik>
  );
}
