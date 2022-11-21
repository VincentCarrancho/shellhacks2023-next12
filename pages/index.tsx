import Link from "next/link";
import HomepageStatisticCircle from "../components/homepage/statisticCircle";
import { Title, Text } from "@mantine/core";
/**
 * SSR Page. Minimize the amount of Javascript being used
 */
export default function Root() {
  return (
    <div>
      <div className="homepage-hero">
        <Title>Florida's Largest Hackathon</Title>
        <Text>
          Ready to kickstart your career in tech and learn about the latest
          technologies? Join us for ShellHacks!
        </Text>
      </div>
      <div className="statistic-circles">
        <HomepageStatisticCircle statistic={1000} desc={"Total Hackers!"} />
        <HomepageStatisticCircle
          statistic={350}
          desc={"Innovative Projects Built!"}
        />
        <HomepageStatisticCircle statistic={30} desc={"Total Sponsors!"} />
      </div>
      <div className="shellhacks-descriptions">
        <div className="join-us">
          <div className="shellhacks-descriptions-header">
            <Title>Join us in Miami, FL at ShellHacks 2023! </Title>
          </div>
          <div className="shellhacks-descriptions-description">
            <Text>
              ShellHacks is Florida’s largest Hackathon! 700+ people from
              Florida and other places in the world gather in order to learn the
              latest technologies, develop innovative solutions, network with
              top companies, and more!
            </Text>
          </div>
        </div>
        <div className="what-youll-do">
          <div className="shellhacks-descriptions-header">
            <Title>Here’s what you’ll do at ShellHacks!</Title>
          </div>
          <div className="shellhacks-descriptions-description">
            <ul>
              <li>
                <Text>
                  Collaborate with fellow hackers and mentors to build
                  innovative and exciting projects!
                </Text>
              </li>
              <li>
                <Text>
                  Network with company recruiters/employees and land job
                  opportunities!
                </Text>
              </li>
              <li>
                <Text>
                  WIN amazing prizes, get tons of cool swag, and a lot more!
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
