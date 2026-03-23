import { ThankYouPage } from "./ThankYouPage";

export function DrainageThankYou() {
  return (
    <ThankYouPage
      slug="drainage"
      serviceType="Drainage"
      formName="offer-drainage"
      message="Thank you! We'll contact you within 24 hours to schedule your free drainage site evaluation."
      servicePageUrl="/services/drainage"
    />
  );
}
