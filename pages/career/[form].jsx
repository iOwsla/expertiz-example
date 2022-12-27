import React, { useEffect, useState } from "react";
import Layout from "/layout/main";
import Appeal from "../../components/form/appeal";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProjectStaticPaths } from "/lib/static-paths";
function FormCareer() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true)
    } else {
      setMobile(false)
    }
    ; window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        setMobile(true)
      } else {
        setMobile(false)
      }
      ;
    });
  }, []);




  return <>
    <Layout >
      <Appeal></Appeal>
    </Layout>

  </>;
}
export default FormCareer;


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "home"])),
  },
});

export async function getStaticPaths() {
  var paths = [];
  ProjectStaticPaths.map((item) => {
    paths.push({
      params: { form: item },
      locale: "tr",
    });
    paths.push({
      params: { form: item },
      locale: "en",
    });
  });
  return { paths, fallback: false };
}
