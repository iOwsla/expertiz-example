import React from "react";
import Header from "../header";
import Footer from "../footer";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Slider from "../../components/slider";

const Index = ({ children, image, title, color, head_title }) => {
	const { t, i18n } = useTranslation("layout");

	return (
		<div className="main_container">
			<Head>
				<title>
					{head_title
						? t("head_title") + " - " + head_title
						: t("head_title")}
				</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />

			</Head>
			<Header>
				<Slider></Slider>
			</Header>
			<main>
				<div className="main" style={{ backgroundColor: color }}>
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
};
const areEqual = (prev, next) => {
	return (
		prev.children === next.children &&
		prev.showLanguage === next.showLanguage
	);
};
export default React.memo(Index, areEqual);
