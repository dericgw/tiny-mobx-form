import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { TextInputField } from 'evergreen-ui';

import { Form } from '../../dist';

const schema = [
  {
    name: 'firstName',
    placeholder: 'John',
    label: 'First Name',
    validation: 'required|letters|length:2,20',
    initialValue: '',
  },
  {
    name: 'lastName',
    placeholder: 'Appleseed',
    label: 'Last Name',
    validation: 'required|letters|length:2,20',
    initialValue: '',
  },
  {
    name: 'email',
    placeholder: 'jon@gmail.com',
    label: 'Email',
    validation: 'required|email',
    initialValue: '',
  },
  {
    name: 'age',
    placeholder: '22',
    label: 'Age',
    validation: 'required|number|size:18,100',
    initialValue: '',
  },
];

const { fields } = new Form(schema);

function OnblurValidation() {
  const [blurredFields, setBlurredFields] = useState([]);

  return (
    <div>
      <div>
        <TextInputField
          required
          type="text"
          name="firstName"
          value={fields.firstName.value}
          placeholder={fields.firstName.placeholder}
          label={fields.firstName.label}
          validationMessage={blurredFields.includes('firstName') && fields.firstName.hasErrors && fields.firstName.errors.join(' ')}
          onBlur={() => setBlurredFields([...blurredFields, 'firstName'])}
          isInvalid={blurredFields.includes('firstName') && fields.firstName.hasErrors}
          onChange={e => (fields.firstName.value = e.currentTarget.value)}
        />
      </div>
      <div>
        <TextInputField
          required
          type="text"
          name="lastName"
          value={fields.lastName.value}
          placeholder={fields.lastName.placeholder}
          label={fields.lastName.label}
          validationMessage={blurredFields.includes('lastName') && fields.lastName.hasErrors && fields.lastName.errors.join(' ')}
          onBlur={() => setBlurredFields([...blurredFields, 'lastName'])}
          isInvalid={blurredFields.includes('lastName') && fields.lastName.hasErrors}
          onChange={e => (fields.lastName.value = e.currentTarget.value)}
        />
      </div>
      <div>
        <TextInputField
          required
          type="text"
          name="email"
          value={fields.email.value}
          placeholder={fields.email.placeholder}
          label={fields.email.label}
          validationMessage={blurredFields.includes('email') && fields.email.hasErrors && fields.email.errors.join(' ')}
          onBlur={() => setBlurredFields([...blurredFields, 'email'])}
          isInvalid={blurredFields.includes('email') && fields.email.hasErrors}
          onChange={e => (fields.email.value = e.currentTarget.value)}
        />
      </div>
      <div>
        <TextInputField
          required
          type="text"
          name="age"
          value={fields.age.value}
          placeholder={fields.age.placeholder}
          label={fields.age.label}
          validationMessage={blurredFields.includes('age') && fields.age.hasErrors && fields.age.errors.join(' ')}
          onBlur={() => setBlurredFields([...blurredFields, 'age'])}
          isInvalid={blurredFields.includes('age') && fields.age.hasErrors}
          onChange={e => (fields.age.value = e.currentTarget.value)}
          error={fields.age.isDirty && fields.age.hasErrors && fields.age.errors.join(' ')}
        />
      </div>
    </div>
  );
}

export default observer(OnblurValidation);
