import { title } from "@/components/primitives";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col space-y-4">
    <div>
      <h1 className={title()}>About</h1>
    </div>
    <div>
      <p>Fancy seeing you here 🙃</p>
      <p>This is supposed to be the about page, but you're not supposed to be here.</p>
    </div>
    </section>
  );
}
