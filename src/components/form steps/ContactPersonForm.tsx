import { InputStyled } from "../styles/InputStyled"
import { FormWrapper } from "../styles/FormWrapper"

type ContactPersonData = {
  title: string
  contactPersonName: string
  contactPersonSurname: string
  contactPersonJobTitle: string
  contactPersonEmail: string
  contactPersonCountryCode: string
  contactPersonPhone: string
}

type ContactPersonFormProps = ContactPersonData & {
  updateFields: (fields: Partial<ContactPersonData>) => void
}

export function ContactPersonForm({
  title,
  contactPersonName,
  contactPersonSurname,
  contactPersonJobTitle,
  contactPersonEmail,
  contactPersonCountryCode,
  contactPersonPhone,
  updateFields,
}: ContactPersonFormProps) {
  return (
    <FormWrapper>
      <h2>{title}</h2>
      <InputStyled>
        <input
          type="text"
          value={contactPersonName}
          onChange={e => updateFields({ contactPersonName: e.target.value })}
          />
        <label>Name</label>
      </InputStyled>
      <InputStyled>
        <input
          type="text"
          value={contactPersonSurname}
          onChange={e => updateFields({ contactPersonSurname: e.target.value })}
          />
        <label>Surname</label>
      </InputStyled>
      <InputStyled>
        <input
          type="text"
          value={contactPersonJobTitle}
          onChange={e => updateFields({ contactPersonJobTitle: e.target.value })}
          />
        <label>Job title</label>
      </InputStyled>
      <InputStyled>
        <input
          type="text"
          value={contactPersonEmail}
          onChange={e => updateFields({ contactPersonEmail: e.target.value })}
          />
        <label>E-mail address</label>
      </InputStyled>

      <div className="phone-input">
        <InputStyled>
          <input
            type="text"
            value={contactPersonCountryCode}
            onChange={e => updateFields({ contactPersonCountryCode: e.target.value })}
            />
          <label>Country code</label>
        </InputStyled>
        <InputStyled>
          <input
            type="text"
            value={contactPersonPhone}
            onChange={e => updateFields({ contactPersonPhone: e.target.value })}
            />
          <label>Phone No.</label>
        </InputStyled>
      </div>
    </FormWrapper>
  )
}
