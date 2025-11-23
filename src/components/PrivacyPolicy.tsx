import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
      role="main"
      aria-labelledby="privacy-title"
    >
      <h1
        id="privacy-title"
        className="text-3xl md:text-4xl font-bold text-rx-gold mb-8 text-center"
        tabIndex={0}
      >
        Política de Privacidad
      </h1>

      <div className="space-y-6 text-gray-300">
        <section aria-labelledby="info-collection">
          <h2
            id="info-collection"
            className="text-2xl font-semibold text-white mb-4"
            tabIndex={0}
          >
            Información que Recopilamos
          </h2>
          <p className="mb-4" tabIndex={0}>
            Recopilamos la siguiente información cuando utiliza nuestro formulario de contacto:
          </p>
          <ul className="list-disc pl-6 space-y-2" role="list">
            <li tabIndex={0}>Nombre completo</li>
            <li tabIndex={0}>Dirección de correo electrónico</li>
            <li tabIndex={0}>Empresa u organización (si aplica)</li>
            <li tabIndex={0}>Número de teléfono (opcional)</li>
            <li tabIndex={0}>Contenido de su mensaje</li>
          </ul>
        </section>

        <section aria-labelledby="info-use">
          <h2
            id="info-use"
            className="text-2xl font-semibold text-white mb-4"
            tabIndex={0}
          >
            Uso de la Información
          </h2>
          <p className="mb-4" tabIndex={0}>
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 space-y-2" role="list">
            <li tabIndex={0}>Responder a sus consultas y solicitudes</li>
            <li tabIndex={0}>Mantener comunicación sobre posibles colaboraciones</li>
            <li tabIndex={0}>Mejorar nuestros servicios y experiencia del usuario</li>
            <li tabIndex={0}>Cumplir con obligaciones legales</li>
          </ul>
        </section>

        <section aria-labelledby="data-protection">
          <h2
            id="data-protection"
            className="text-2xl font-semibold text-white mb-4"
            tabIndex={0}
          >
            Protección de Datos
          </h2>
          <p tabIndex={0}>
            Implementamos medidas de seguridad técnicas y organizativas para proteger su
            información personal. Sus datos se almacenan de forma segura y solo se accede a
            ellos cuando es necesario.
          </p>
        </section>

        <section aria-labelledby="your-rights">
          <h2
            id="your-rights"
            className="text-2xl font-semibold text-white mb-4"
            tabIndex={0}
          >
            Sus Derechos
          </h2>
          <p className="mb-4" tabIndex={0}>
            Usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-2" role="list">
            <li tabIndex={0}>Acceder a sus datos personales</li>
            <li tabIndex={0}>Rectificar datos incorrectos</li>
            <li tabIndex={0}>Solicitar la eliminación de sus datos</li>
            <li tabIndex={0}>Oponerse al procesamiento de sus datos</li>
            <li tabIndex={0}>Solicitar la portabilidad de sus datos</li>
          </ul>
        </section>

        <section aria-labelledby="contact-info">
          <h2
            id="contact-info"
            className="text-2xl font-semibold text-white mb-4"
            tabIndex={0}
          >
            Contacto
          </h2>
          <p tabIndex={0}>
            Para ejercer sus derechos o realizar consultas sobre nuestra política de
            privacidad, puede contactarnos en:{' '}
            <a
              href="mailto:revolutionx.f1@gmail.com"
              className="text-rx-gold hover:text-yellow-300 underline focus:outline-none focus:ring-2 focus:ring-rx-gold focus:ring-offset-2 focus:ring-offset-black"
              tabIndex={0}
            >
              revolutionx.f1@gmail.com
            </a>
          </p>
        </section>
      </div>
    </motion.div>
  );
}