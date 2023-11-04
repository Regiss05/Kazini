import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Footer from "layouts/authentication/components/Footer";

function CoverLayout({ color, header, title, description, image, top, children }) {
  return (
    <PageLayout background="white">
      <Grid
        container
        justifyContent="center"
        sx={{
          minHeight: "75vh",
          margin: 0,
        }}
      >
        <Grid item xs={11} sm={8} md={5} xl={3}>
          <SoftBox mt="1rem">
            <SoftBox>
              {!header ? (
                <>
                  <SoftBox mb={1}>
                    <SoftTypography variant="h3" fontWeight="bold" color="primary" textGradient>
                      {title}
                    </SoftTypography>
                  </SoftBox>
                  <SoftTypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </SoftTypography>
                </>
              ) : (
                header
              )}
            </SoftBox>
            <SoftBox pt="1rem">{children}</SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <SoftBox
            height="100%"
            display={{ xs: "none", md: "block" }}
            position="relative"
            right={{ md: "-10rem", xl: "-12rem" }}
          >
            <SoftBox
              height="100%"
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "80%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 80%",
              }}
            />
          </SoftBox>
        </Grid>
      </Grid>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
