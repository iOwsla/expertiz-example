import Layout from "/layout/main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Detail from "../components/detail";
import WhoWeAre from "../components/who_we_are";
import Services from "../components/services";
import BieksperWithAds from "../components/bieksper_with_ads";
import ServicesMap from "../components/services_map";
import Partner from "../components/partner";
import Slider from "../components/slider";
import ContactUs from "../components/contact_us";


const Index = () => {
	return (
		<>
			<Layout>
				<Slider />
				<WhoWeAre></WhoWeAre>
				<Services></Services>
				<ServicesMap></ServicesMap>
				<BieksperWithAds></BieksperWithAds>
				<Partner></Partner>
				<ContactUs></ContactUs>
				<Detail></Detail>
			</Layout>
			
		</>
	);
};

export default Index;
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, [
			"layout",
			"home",
			"about_us",
			"contact"
		])),
	},
});
