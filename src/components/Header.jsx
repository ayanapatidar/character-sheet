import './Header.css'

function Header({ character }) {
  const { name, level, className, subclass, tagline, details } = character

  return (
    <header className="panel header">
      <h1 className="header__name">{name}</h1>
      <p className="header__class">
        Level {level} {className} + {subclass}
      </p>
      <p className="header__tagline">{tagline}</p>

      <dl className="header__details">
        {details.map((detail) => (
          <div key={detail.label}>
            <dt className="label">{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  )
}

export default Header