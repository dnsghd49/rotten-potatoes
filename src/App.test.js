import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';

import Topbar from "./components/Topbar";
import App from "./App"
import MoviesTab from "./pages/MoviesTab";
import Aaron from "./components/Devs/Aaron";
import DevTeam from "./pages/DevTeam";

test('rednering snapshot', () => {
  const snapshot = renderer.create(<App />).toJSON()
  expect(snapshot).toMatchSnapshot()
  // console.log(snapshot);
})

test('check if the logo displays', () => {
  render(<MoviesTab />)
  const imgElement = screen.getByAltText(/a big potato/i)
  expect(imgElement).toBeInTheDocument()
})

test('check if the developers page is loading the text', () => {
  render(<DevTeam />)
  const frontendTextElement = screen.getByText(/FRONT-END DEVS/i)
  const backendTextElement = screen.getByText(/BACK-END DEVS/i)
  expect(frontendTextElement).toBeInTheDocument()
  expect(backendTextElement).toBeInTheDocument()
})

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
  fetch.mockResponseOnce(JSON.stringify({ name: 'Aaron Lu' }))
  render(<Aaron />)
  const gitHubName = await screen.findByRole('heading', { level: 2 })
  expect(gitHubName).toHaveTextContent('Aaron Lu')
})