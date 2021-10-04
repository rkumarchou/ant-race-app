import { render } from "@testing-library/react";
import { generateAntWinLikelihoodCalculator } from "../src/utils/generateAntWinLikelihoodCalculator";
import Header from "./components/header/header";
const util = require("util");

it("should return a number", async () => {
  const generateCalculation = generateAntWinLikelihoodCalculator((likelihood) => {
    return likelihood;
  });
  const result = util.promisify(generateCalculation);
  const dfsdf = await result().catch((err) => {
    return err;
  });
  expect(dfsdf).toBeGreaterThan(0);
}, 100000);

jest.mock("react-redux", () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent,
    }),
    Provider: ({ children }) => children,
  };
});
describe("Component should render properly", () => {
  it("Header component should render correctly", () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId("header-container")).toBeTruthy();
  });
});
