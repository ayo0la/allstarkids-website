import { render, screen } from "@testing-library/react";
import CareersPage from "@/app/careers/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => <img {...props} />,
}));
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("CareersPage", () => {
  it("renders the page heading", () => {
    render(<CareersPage />);
    expect(screen.getByRole("heading", { name: /careers|hiring|join/i })).toBeInTheDocument();
  });

  it("renders all three job roles", () => {
    render(<CareersPage />);
    expect(screen.getByText(/Teacher.*1 Year/i)).toBeInTheDocument();
    expect(screen.getByText(/Teacher.*2 Year/i)).toBeInTheDocument();
    expect(screen.getByText(/Bus Driver/i)).toBeInTheDocument();
  });

  it("renders Apply Now links for each role", () => {
    render(<CareersPage />);
    const applyLinks = screen.getAllByRole("link", { name: /apply now/i });
    expect(applyLinks).toHaveLength(3);
  });
});
