import { ThankYouPage } from "./ThankYouPage";

export function ExcavationThankYou() {
  return (
    <ThankYouPage
      slug="excavation"
      serviceType="Excavation"
      formName="offer-excavation"
      message="Thank you! We'll contact you within 24 hours to schedule your free excavation site evaluation."
      servicePageUrl="/services/excavation"
    />
  );
}
