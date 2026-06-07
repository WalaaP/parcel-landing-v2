import { useState } from 'react'
import { motion } from 'framer-motion'

interface ServiceOption { value: string; label: string }

interface FormState {
  name:    string
  email:   string
  company: string
  phone:   string
  service: string
  message: string
}

const initial: FormState = { name: '', email: '', company: '', phone: '', service: '', message: '' }

const defaultServiceOptions: ServiceOption[] = [
  { value: 'instant',     label: 'Instant Delivery' },
  { value: 'sameday',    label: 'Same Day Delivery' },
  { value: 'nextday',    label: 'Next Day Delivery' },
  { value: 'ecommerce',  label: 'E-Commerce Fulfillment' },
  { value: 'enterprise', label: 'Enterprise / Custom Solution' },
]

const t = {
  en: {
    labelName:      'Full Name',
    labelEmail:     'Email',
    labelCompany:   'Company',
    labelPhone:     'Phone',
    labelService:   'Service Interested In',
    labelMessage:   'Message',
    phName:         'Ahmed Al-Rashid',
    phEmail:        'ahmed@company.bh',
    phCompany:      'Your company name',
    phPhone:        '+973 XXXX XXXX',
    phService:      'Select a service',
    phMessage:      'Tell us about your delivery needs...',
    submit:         'Send Message →',
    sending:        'Sending...',
    errName:        'Name is required',
    errEmail:       'Valid email is required',
    errMessage:     'Message is required',
    errGeneral:     'Something went wrong. Please try again.',
    successTitle:   'Message received!',
    successSub:     "We'll get back to you within one business day.",
    successBtn:     'Send another message',
  },
  ar: {
    labelName:      'الاسم الكامل',
    labelEmail:     'البريد الإلكتروني',
    labelCompany:   'الشركة',
    labelPhone:     'الهاتف',
    labelService:   'الخدمة المطلوبة',
    labelMessage:   'الرسالة',
    phName:         'أحمد الراشد',
    phEmail:        'ahmed@company.bh',
    phCompany:      'اسم شركتك',
    phPhone:        '+973 XXXX XXXX',
    phService:      'اختر خدمة',
    phMessage:      'أخبرنا عن احتياجات التوصيل لديك...',
    submit:         'إرسال الرسالة ←',
    sending:        'جارٍ الإرسال...',
    errName:        'الاسم مطلوب',
    errEmail:       'البريد الإلكتروني غير صحيح',
    errMessage:     'الرسالة مطلوبة',
    errGeneral:     'حدث خطأ. يرجى المحاولة مجدداً.',
    successTitle:   'تم استلام رسالتك!',
    successSub:     'سنرد عليك خلال يوم عمل واحد.',
    successBtn:     'إرسال رسالة أخرى',
  },
}

export default function ContactForm({ serviceOptions = defaultServiceOptions, lang = 'en' }: { serviceOptions?: ServiceOption[]; lang?: 'en' | 'ar' }) {
  const i18n = t[lang]
  const [form, setForm]       = useState<FormState>(initial)
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors]   = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim())                    e.name    = i18n.errName
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = i18n.errEmail
    if (!form.message.trim())                 e.message = i18n.errMessage
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')

    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
  }

  const field = (name: keyof FormState) => ({
    value: form[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [name]: e.target.value })),
    className: `cf-input${errors[name] ? ' cf-input--error' : ''}`,
  })

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="cf-success"
      >
        <div className="cf-success-icon">✓</div>
        <h3>{i18n.successTitle}</h3>
        <p>{i18n.successSub}</p>
        <button onClick={() => { setForm(initial); setStatus('idle') }} className="cf-btn">{i18n.successBtn}</button>

        <style>{`
          .cf-success {
            text-align: center;
            padding: 60px 32px;
            background: var(--navy);
            border: 1px solid var(--border);
            border-radius: 20px;
          }
          .cf-success-icon {
            width: 56px; height: 56px;
            background: var(--signal);
            color: var(--ink-inverse);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 700;
            margin: 0 auto 20px;
          }
          .cf-success h3 {
            font-family: var(--font-display);
            font-size: 28px;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--ink);
            margin-bottom: 8px;
          }
          .cf-success p {
            color: var(--ink-muted);
            margin-bottom: 28px;
          }
        `}</style>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-name">{i18n.labelName} *</label>
          <input id="cf-name" type="text" placeholder={i18n.phName} {...field('name')} />
          {errors.name && <span className="cf-error">{errors.name}</span>}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-email">{i18n.labelEmail} *</label>
          <input id="cf-email" type="email" placeholder={i18n.phEmail} {...field('email')} />
          {errors.email && <span className="cf-error">{errors.email}</span>}
        </div>
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-company">{i18n.labelCompany}</label>
          <input id="cf-company" type="text" placeholder={i18n.phCompany} {...field('company')} />
        </div>
        <div className="cf-field">
          <label htmlFor="cf-phone">{i18n.labelPhone}</label>
          <input id="cf-phone" type="tel" placeholder={i18n.phPhone} {...field('phone')} />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-service">{i18n.labelService}</label>
        <select id="cf-service" {...field('service')}>
          <option value="">{i18n.phService}</option>
          {serviceOptions.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-message">{i18n.labelMessage} *</label>
        <textarea
          id="cf-message"
          rows={5}
          placeholder={i18n.phMessage}
          {...field('message')}
        />
        {errors.message && <span className="cf-error">{errors.message}</span>}
      </div>

      <button type="submit" className="cf-btn" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(9,39,61,0.3)', borderTopColor: '#09273d', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            {i18n.sending}
          </span>
        ) : i18n.submit}
      </button>

      {status === 'error' && <p className="cf-error" style={{ marginTop: 12, textAlign: 'center' }}>{i18n.errGeneral}</p>}

      <style>{`
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .cf-field { display: flex; flex-direction: column; gap: 8px; }
        .cf-field label {
          font-family: var(--font-ui);
          font-size: 13px;
          font-weight: 500;
          color: var(--ink-muted);
          letter-spacing: 0.02em;
        }
        .cf-input, input.cf-input, select.cf-input, textarea.cf-input {
          background: var(--navy);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          padding: 13px 16px;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--ink);
          outline: none;
          width: 100%;
          transition: border-color 0.2s ease;
          resize: vertical;
        }
        .cf-input::placeholder { color: var(--ink-faint); }
        .cf-input:focus { border-color: var(--signal); }
        .cf-input--error { border-color: var(--red) !important; }
        .cf-error {
          font-family: var(--font-ui);
          font-size: 12px;
          color: var(--red);
        }
        .cf-btn {
          background: var(--signal);
          color: var(--ink-inverse);
          font-family: var(--font-ui);
          font-weight: 700;
          font-size: 15px;
          padding: 15px 36px;
          border-radius: var(--pill-radius);
          border: none;
          cursor: pointer;
          align-self: flex-start;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cf-btn:hover:not(:disabled) {
          background: var(--signal-dim);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(254,209,44,0.35);
        }
        .cf-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        @media (max-width: 639px) {
          .cf-row { grid-template-columns: 1fr; }
          .cf-btn { width: 100%; justify-content: center; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  )
}
