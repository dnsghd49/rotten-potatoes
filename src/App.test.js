import { render, screen } from "@testing-library/react";
// import { mount } from 'enzyme';

import Topbar from "./components/Topbar";
import App from "./App"
import DevTeam from "./pages/DevTeam";

test('check if the developers page is loading the text', () => {
  render(<DevTeam />)
  const navTextElement = screen.getByText(/FRONT-END DEVS/i)
  expect(navTextElement).toBeInTheDocument()
})
