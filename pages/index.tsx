import Link from "next/link";
import { Typography } from "@mui/material";
/**
 * SSR Page. Minimize the amount of Javascript being used
 */
export default function Root() {
  return (
    <div>
      <body>
        <h1>ShellHacks 2023</h1>
        <h3>
          Register
          <Link href="/registration"> For ShellHacks 2023!</Link>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          ducimus quibusdam voluptate aliquam. Sequi pariatur consequatur at,
          hic accusantium amet corrupti, veritatis eos aut fugiat tempora ad
          expedita dicta repellendus esse, praesentium qui illo nisi sed
          exercitationem tenetur? Distinctio a hic, natus dignissimos cumque
          iure ratione sint et ab. Vel non consequuntur doloribus laudantium
          omnis hic, possimus, doloremque labore facere quasi iste nisi nemo
          dolorem minima culpa id quidem cumque sed sit incidunt quaerat aut
          itaque! Voluptatem, eius perspiciatis. Obcaecati!
        </p>
      </body>
    </div>
  );
}
