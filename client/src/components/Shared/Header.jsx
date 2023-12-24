

const Header = ({text, count}) => {
  return (
    <div className="stats bg-primary text-primary-content">
  
  <div className="stat">
    
    <div className="stat-value">{text}</div>
    <div className="stat-actions">
      <button className="btn btn-sm btn-success">{count}</button>
    </div>
  </div>
  
</div>
  )
}

export default Header
