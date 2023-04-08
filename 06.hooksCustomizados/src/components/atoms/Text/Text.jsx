import style from "./Text.module.css";

export default function Text({
  children,
  title, subtitle, H3, H4, H5, H6, code, A, link,
  titleColor, subtitleColor, H3color, H4color, H5color, H6color, paragraphColor,
}) {
  return (
    <>
      {title && (
        <h1 className={style.title} style={{ color: titleColor }}>
          {title}
        </h1>
      )}
      {subtitle && (
        <h2 className={style.subtitle} style={{ color: subtitleColor }}>
          {subtitle}
        </h2>
      )}
      {H3 && (
        <h3 className={style.H3} style={{ color: H3color }}>
          {H3}
        </h3>
      )}
      {H4 && (
        <h4 className={style.H4} style={{ color: H4color }}>
          {H4}
        </h4>
      )}
      {H5 && (
        <h5 className={style.H5} style={{ color: H5color }}>
          {H5}
        </h5>
      )}
      {H6 && (
        <h6 className={style.H6} style={{ color: H6color }}>
          {H6}
        </h6>
      )}
      {code && <code className={style.code}>{code}</code>}
      {A && (
        <a className={style.A} href={link} target="_blank" rel="noreferrer">
          {A}
        </a>
      )}
      {children && (
        <p className={style.paragraph} style={{ color: paragraphColor }}>
          {children}
        </p>
      )}
    </>
  );
}

Text.defaultProps = {
  titleColor: "#ffffff",
  H3color: "#646cff",
};
