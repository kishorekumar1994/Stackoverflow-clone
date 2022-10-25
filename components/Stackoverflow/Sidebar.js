import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-options">
                    <div className="sidebar-option">
                        <Link>Home</Link>
                    </div>
                    <div className="sidebar-option">
                        <Link>PUBLIC</Link>
                        <div className="link">
                            <div className="link-tag">
                                <Public />
                                <Link>Question</Link>
                            </div>
                            <div className="tags">
                                <p>tags</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-option">
                        <p>COLLECTIVES</p>
                        <div className="link-tag">
                            <Stars />
                            <Link>Explore Collectives</Link>
                        </div>
                    </div>

                </div>
                <div className="sidebar-option">
                    <p>FIND A JOB</p>
                    <div className="link">
                        <div className="link-tag">
                             <Link>Jobs</Link>
                        </div>
                    </div>
                    <div className="sidebar-options">
                           <p>TEAMS</p>
                           <div className="link-tag">
                            <Work />
                             <Link>Companies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar