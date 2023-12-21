import { TextField, Button } from "@mui/material";

import "./Login.scss";

export const Login = () => {
	return (
		<>
			<div className="Login">
				<h1>Servicemodul</h1>
				<TextField
					type="email"
					id="outlined-basic"
					label="Email"
					variant="outlined"
				/>
				<TextField
					id="outlined-basic"
					label="Password"
					variant="outlined"
					type="password"
				/>
				<Button variant="contained">Login</Button>
			</div>
		</>
	);
};
