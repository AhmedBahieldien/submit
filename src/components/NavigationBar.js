import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { reSetAuthedUser } from '../actions/authedUser';

//bootstarp
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavigationBar(props) {
	const { user } = props;
	const {dispatch} = props;

	const handleLogout = () => {
		dispatch(reSetAuthedUser());
	};
//export default connect(mapStateToProps)(NavigationBar);
	return (
		<dev>
			<Navbar >
				<Navbar.Toggle  />
				
					<Nav >
						<Nav.Link as={NavLink} to="/" exact>
							-Home-
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							-+ QUESTIONS-
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
							-Leaderboards-
						</Nav.Link>
					</Nav>
					<Nav >
					
						<Nav.Link as={NavLink} to="/">
						-{user.name}-
						</Nav.Link>
						<Button	
							onClick={handleLogout}					
						>
							SIGNOUT
						</Button>
					</Nav>
			</Navbar>
		</dev>
	);
}
//export default connect(mapStateToProps)(NavigationBar);

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavigationBar);