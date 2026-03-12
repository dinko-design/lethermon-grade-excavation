import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Company Settings")
        .id("companySettings")
        .child(
          S.document()
            .schemaType("companySettings")
            .documentId("companySettings")
            .title("Company Settings"),
        ),
      S.divider(),
      S.listItem()
        .title("Services")
        .schemaType("service")
        .child(S.documentTypeList("service").title("Services")),
      S.listItem()
        .title("Service Areas")
        .schemaType("serviceArea")
        .child(S.documentTypeList("serviceArea").title("Service Areas")),
      S.listItem()
        .title("Reviews")
        .schemaType("review")
        .child(S.documentTypeList("review").title("Reviews")),
      S.divider(),
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Posts")
                .schemaType("blogPost")
                .child(S.documentTypeList("blogPost").title("Posts")),
              S.listItem()
                .title("Categories")
                .schemaType("category")
                .child(S.documentTypeList("category").title("Categories")),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Press Releases")
        .schemaType("pressRelease")
        .child(S.documentTypeList("pressRelease").title("Press Releases")),
      S.listItem()
        .title("Careers")
        .schemaType("jobListing")
        .child(S.documentTypeList("jobListing").title("Job Listings")),
    ]);
