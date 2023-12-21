import { Button, TextField } from "@mui/material";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./Kunde.scss";

import axios from "axios";

interface KundeInformation {
	kunde: Kunde;
	information: Information[];
}

interface Kunde {
	navn: string;
	adresse: string;
	postnr: string;
	by: string;
	email: string;
	telefon: string;
}

interface Information {
	id: number;
	navn: string;
	indhold: string;
}
//@ts-ignore
export const Kunde = () => {
	const [information, setInformation] = useState<KundeInformation>();

	const { KundeID } = useParams();

	const getKundeInformation = async () => {
		const info: KundeInformation = await axios.get(
			`https://api.smallbenji.tech/GetKunde/3409/${KundeID}`
		);

		//@ts-ignore
		setInformation(info.data[0]);
	};

	useEffect(() => {
		if (!information) {
			getKundeInformation();
			console.log(information);
		}
	});

	return (
		<>
			<div className="Frame">
				<div className="top">
					<div className="KundeOplysninger">
						<h2>{information && information.kunde.navn}</h2>
						<p>{information && information.kunde.adresse}</p>
						<p>
							{information &&
								`${information.kunde.postnr} ${information.kunde.by}`}
						</p>
					</div>
					<div className="ContactInfo">
						<h2>Kontakt</h2>
						<p>Mail: {information && information.kunde.email}</p>
						<p>{information && information.kunde.telefon}</p>
					</div>
				</div>
				<div className="grid">
					{information &&
						information.information.map((info) => (
							<InformationModule
								key={info.id}
								info={info}
								KInfo={information}
							/>
						))}
				</div>

				<div className="Kommentar">
					<TextField
						className="Kommentar"
						label="Kommentar"
						multiline
						rows={4}
					/>
				</div>

				<div className="Buttons">
					<Button variant="contained">Opdater</Button>
					<Button variant="contained">Luk</Button>
				</div>
			</div>
		</>
	);
};

type InformationProps = {
	info: Information;
	KInfo: KundeInformation;
};

const InformationModule = ({ info }: InformationProps) => {
	const [information, setInformation] = useState<Information>();
	useEffect(() => {
		setInformation(info);
		console.log(information);
	}, [info]);

	return (
		<div className="Information">
			<h3>{information?.navn}</h3>
			<TextField
				value={information?.indhold}
				onChange={(e) => {
					//@ts-ignore
					setInformation({ ...information, indhold: e.target.value });
				}}
			/>
		</div>
	);
};
