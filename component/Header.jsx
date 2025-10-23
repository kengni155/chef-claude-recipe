import chefClaudeLogo from '/images/chef-claude-icon.png'

export default function Header() {

    return (
        <div className="Header">
            <img className="claude-icon" src={chefClaudeLogo} alt="chef claude icon" />
            <h1 className="header-text">Chef Claude</h1>
        </div>
    )
}