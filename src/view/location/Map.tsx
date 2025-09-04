const MapSection = () => {
  return (
    <div className="px-28 py-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2995532354703!2d106.80308661144433!3d-6.2241766937378555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14e1e509b95%3A0xd5ad687eede84a66!2sJl.%20Jenderal%20Sudirman%20No.123%2C%20RT.1%2FRW.3%2C%20Gelora%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010270!5e0!3m2!1sid!2sid!4v1756971083543!5m2!1sid!2sid"
        width="100%"
        height="384"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl shadow-2xl"
      ></iframe>
    </div>
  );
};

export default MapSection;
