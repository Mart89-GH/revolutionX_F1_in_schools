import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import FormField from './ui/FormField';
import EnhancedButton from './ui/EnhancedButton';

const schema = yup.object({
  name: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('Ingrese un email válido'),
  company: yup
    .string()
    .max(100, 'El nombre de la empresa no puede exceder 100 caracteres'),
  phone: yup
    .string()
    .matches(/^[+]?[\d\s\-()]+$/, 'Ingrese un número de teléfono válido')
    .min(9, 'El teléfono debe tener al menos 9 dígitos'),
  subject: yup
    .string()
    .required('El asunto es obligatorio')
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(100, 'El asunto no puede exceder 100 caracteres'),
  message: yup
    .string()
    .required('El mensaje es obligatorio')
    .min(20, 'El mensaje debe tener al menos 20 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
  privacy: yup
    .boolean()
    .oneOf([true], 'Debe aceptar la política de privacidad')
});

type FormData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  privacy?: boolean;
};

interface EnhancedContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
}

const EnhancedContactForm: React.FC<EnhancedContactFormProps> = ({ onSubmit }) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    watch
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const watchedMessage = watch('message', '');
  const messageLength = watchedMessage?.length || 0;

  const handleFieldBlur = (fieldName: keyof FormData) => {
    setTouchedFields(prev => ({ ...prev, [fieldName]: true }));
  };

  const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    // Marcamos visualmente que la información se está enviando
    setSubmitStatus('loading');

    try {
      // Si se proporciona una función onSubmit externa, la usamos
      if (onSubmit) {
        await onSubmit(data); // Esperamos a que la función externa termine
      } else {
        // Si no hay función externa, usamos el envío por correo electrónico
        const subject = `Contacto RevolutionX - ${data.subject}`; // Definimos el asunto del correo
        const body = `
Nombre: ${data.name}
Email: ${data.email}
Empresa: ${data.company || 'No especificada'}
Teléfono: ${data.phone || 'No especificado'}

Asunto: ${data.subject}

Mensaje:
${data.message}
        `.trim();

        const mailtoLink = `mailto:revolutionx.f1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; // Construimos el enlace mailto codificando los parámetros
        window.location.href = mailtoLink; // Abrimos el cliente de correo del usuario
      }

      setSubmitStatus('success'); // Indicamos que el proceso fue exitoso
      reset(); // Limpiamos los campos del formulario
      setTouchedFields({}); // Reiniciamos los campos marcados como tocados
    } catch (error) {
      console.error('Error submitting form:', error); // Mostramos el error en la consola para depuración
      setSubmitStatus('error'); // Indicamos que algo salió mal
    } finally {
      setIsSubmitting(false); // Siempre reactivamos el formulario sin importar el resultado
      // Después de 5 segundos, volvemos el estado a 'idle' para ocultar mensajes
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
    // Resumen: esta función envía el formulario, maneja errores y siempre vuelve a activar la interfaz.
    // Alternativa: React Hook Form incluye formState.isSubmitting, que podría eliminar la necesidad de este estado manual.
  };

  return (
    <motion.form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4 xs:space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
        <FormField
          label="Nombre completo (obligatorio)"
          {...register('name', {
            onBlur: () => handleFieldBlur('name')
          })}
          error={touchedFields['name'] ? errors.name?.message : undefined}
          required
          aria-required="true"
          placeholder="Su nombre completo"
          autoComplete="name"
          disabled={isSubmitting}
        />

        <FormField
          label="Email (obligatorio)"
          type="email"
          {...register('email', {
            onBlur: () => handleFieldBlur('email')
          })}
          error={touchedFields['email'] ? errors.email?.message : undefined}
          required
          aria-required="true"
          placeholder="su@email.com"
          autoComplete="email"
          disabled={isSubmitting}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Empresa/Organización"
          {...register('company')}
          error={errors.company?.message}
          placeholder="Nombre de su empresa"
          autoComplete="organization"
        />

        <FormField
          label="Teléfono"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="+34 600 000 000"
          autoComplete="tel"
        />
      </div>

      <FormField
        label="Asunto (obligatorio)"
        {...register('subject')}
        error={errors.subject?.message}
        required
        aria-required="true"
        placeholder="Motivo de su consulta"
      />

      <div className="space-y-2">
        <FormField
          label="Mensaje (obligatorio)"
          multiline
          rows={6}
          {...register('message')}
          error={errors.message?.message}
          required
          aria-required="true"
          placeholder="Cuéntenos sobre su interés en colaborar con RevolutionX..."
        />
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">
            Mínimo 20 caracteres
          </span>
          <span className={`${messageLength > 1000 ? 'text-red-400' : 'text-gray-400'}`}>
            {messageLength}/1000
          </span>
        </div>
      </div>

      <div className="flex items-start space-x-2 xs:space-x-3">
        <input
          type="checkbox"
          id="privacy"
          {...register('privacy')}
          aria-required="true"
          aria-invalid={!!errors.privacy}
          aria-describedby={errors.privacy ? 'privacy-error' : undefined}
          className="mt-1 w-5 h-5 xs:w-4 xs:h-4 text-rx-gold bg-rx-black border-rx-gold/30 rounded focus:ring-rx-gold focus:ring-2 touch-manipulation"
        />
        <label htmlFor="privacy" className="text-xs xs:text-sm text-gray-300 leading-relaxed">
          Acepto la{' '}
          <a
            href="/privacy"
            className="text-rx-gold hover:text-yellow-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            política de privacidad
          </a>{' '}
          y el tratamiento de mis datos personales para responder a mi consulta.
          {errors.privacy && (
            <span id="privacy-error" className="block text-red-400 mt-1" role="alert">
              {errors.privacy.message}
            </span>
          )}
        </label>
      </div>

      <div className="pt-4">
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 p-3 xs:p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-2 xs:space-x-3"
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div>
              <p className="text-green-400 font-medium">¡Mensaje enviado correctamente!</p>
              <p className="text-green-300 text-sm">Nos pondremos en contacto con usted pronto.</p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 p-3 xs:p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-2 xs:space-x-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <div>
              <p className="text-red-400 font-medium">Error al enviar el mensaje</p>
              <p className="text-red-300 text-sm">Por favor, inténtalo de nuevo o contáctanos directamente.</p>
            </div>
          </motion.div>
        )}

        <EnhancedButton
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={submitStatus === 'loading'}
          disabled={!isValid || !isDirty || submitStatus === 'loading'}
          leftIcon={isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <RefreshCw className="w-5 h-5" />
            </motion.div>
          ) : (
            <Send className="w-5 h-5" />
          )}
        >
          {submitStatus === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
        </EnhancedButton>
      </div>
    </motion.form>
  );
};

export default EnhancedContactForm;