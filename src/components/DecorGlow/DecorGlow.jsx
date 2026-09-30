import styles from './DecorGlow.module.css'

export default function DecorGlow({
  top,
  left,
  right,
  size = 500,
  ring = false,
  color,
  opacity,
  blur,
  borderColor,
  borderWidth,
  style,
}) {
  const Cls = ring ? styles.ring : styles.glow
  return (
    <div
      className={Cls}
      style={{
        top,
        left,
        right,
        width: size,
        height: size,
        ...(color ? { background: color } : {}),
        ...(opacity !== undefined ? { opacity } : {}),
        ...(blur !== undefined ? { filter: `blur(${blur}px)` } : {}),
        ...(borderColor ? { borderColor } : {}),
        ...(borderWidth !== undefined ? { borderWidth } : {}),
        ...style,
      }}
      aria-hidden="true"
    />
  )
}
