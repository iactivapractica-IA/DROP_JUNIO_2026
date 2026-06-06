interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  const base = 'px-6 py-3 rounded-xl font-semibold transition-colors'
  const styles = {
    primary: `${base} bg-black text-white hover:bg-gray-800`,
    outline: `${base} border border-black text-black hover:bg-gray-100`,
  }

  return (
    <button className={styles[variant]} onClick={onClick}>
      {label}
    </button>
  )
}
