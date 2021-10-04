import { render } from "@testing-library/react";
import { generateAntWinLikelihoodCalculator } from "../src/utils/generateAntWinLikelihoodCalculator";
import Header from "./components/header/header";
const util = require("util");

it("should return a number", async () => {
  const tets = generateAntWinLikelihoodCalculator((likelihood) => {
    return likelihood;
  });
  const tetss = util.promisify(tets);
  const dfsdf = await tetss().catch((err) => {
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
  it("TreeContainer component should render correctly", () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId("tree-container")).toBeTruthy();
  });
});
