import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchBox } from "../SearchBox/SearchBox";
import { getGifBySearch } from "../Network";

const Container = styled.div`
	position: relative;
	width: 800px;
	min-height: 800px;
	border: 1px solid lightgray;
	border-radius: 10px;
	margin: auto;
	padding: 2%;
`;

const GifViewer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	display: grid;
	margin-top: 15px;
	grid-template-columns: repeat(auto-fill, 110px);
`;

export const ViewPort = () => {
	const [imgs, setImgs] = useState<any[]>([]);
	const [disabled, setDisabled] = useState<boolean>(false);

	return (
		<Container>
			<SearchBox
				placeholder='Search Gif'
				handleSearch={(term: string) => {
					setDisabled(true);
					getGifBySearch(term)
						.then((raw) => raw.json())
						.then((res) => {
							setImgs(res?.data);
							setDisabled(false);
						});
				}}
				disabled={disabled}
			/>
			<GifViewer>
				{imgs.map((img) => (
					<div>
						<img
							src={img?.images?.fixed_width_small?.url}
							width='100'
							height='100'
							alt={img?.title}
						/>
					</div>
				))}
			</GifViewer>
		</Container>
	);
};
