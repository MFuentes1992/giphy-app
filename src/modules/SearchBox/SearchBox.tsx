import React, { ChangeEventHandler, useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchBoxProps } from "./types";

const Container = styled.div`
position: relative;
width; 100%;
min-height: 50px;
display: flex;
`;

const InputBox = styled.input`
	width: 100%;
	min-width: 200px;
	min-height: 50px;
	border: 1px solid lightgray;
	border-radius: 25px;
	margin: 0px 10px 0px 10px;
	font-size: 16pt;
	padding-left: 2%;
	&:focus {
		outline: none;
		border: 2px solid gray;
	}
`;

const Button = styled.button`
	position: relative;
	width: 50px;
	left: -80px;
	border-radius: 50%;
	outline: none;
	border: none;
	background: transparent;
	&:hover {
		cursor: pointer;
	}
`;

export const SearchBox = ({
	placeholder,
	disabled,
	handleSearch,
}: SearchBoxProps) => {
	const [search, setSearch] = useState<string>("");
	const handleClick = () => {
		handleSearch(search);
	};
	return (
		<Container>
			<InputBox
				placeholder={placeholder}
				value={search}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setSearch(e.target.value)
				}
			/>
			<Button onClick={handleClick} disabled={disabled}>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					size='lg'
					style={{ color: disabled ? "lightgray" : "black" }}
				/>
			</Button>
		</Container>
	);
};
