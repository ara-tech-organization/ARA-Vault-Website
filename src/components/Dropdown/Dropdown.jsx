import { useEffect, useRef, useState } from 'react'
import { IconChevronDown, IconCheck } from '../Icons'
import styles from './Dropdown.module.css'

export default function Dropdown({ options, value, onChange, placeholder, name }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function selectOption(option) {
    onChange(option)
    setOpen(false)
  }

  return (
    <div className={styles.dropdown} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        name={name}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={value ? styles.value : styles.placeholder}>
          {value || placeholder}
        </span>
        <IconChevronDown
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width={20}
          height={20}
        />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox" tabIndex={-1}>
          {options.map((option) => {
            const active = option === value
            return (
              <li
                key={option}
                role="option"
                aria-selected={active}
                className={`${styles.option} ${active ? styles.optionActive : ''}`}
                onClick={() => selectOption(option)}
              >
                <span>{option}</span>
                {active && <IconCheck width={16} height={16} className={styles.checkIcon} />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
