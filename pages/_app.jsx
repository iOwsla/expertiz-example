import "/styles/base/_base.scss";
import "/styles/main.scss";
import React from "react";
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "animate.css/animate.min.css";
const MyApp = ({ Component, pageProps }) => {
	const { i18n } = useTranslation();
	return (
		<div className="rtl" dir={i18n.language == "ar" && "rtl"}>
			<Component {...pageProps} />
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
export default appWithTranslation(MyApp);
