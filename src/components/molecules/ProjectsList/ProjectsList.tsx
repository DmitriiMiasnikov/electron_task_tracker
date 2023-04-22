import styled from "styled-components";

import { useProjects } from "src/lib/hooks/states/project";
import { useCreateProject } from "src/lib/hooks/actions/createProject";
import { useDestroyProject } from "src/lib/hooks/actions/destroyProject";

import Button from "src/components/atoms/Button";

const Wrapper = styled.div`
  overflow: auto;
  margin-top: 48px;
  max-width: 1000px;
  padding: 16px;
  background: #fafafa;
`;

const Table = styled.table`
  width: 100%;
  margin: 0 0 1rem;
`;

const TableItem = styled.td`
  padding: 12px;
`;

const Head = styled.thead`
  border-bottom: 1px solid #bdbdbd;
`;

const ProjectsList = () => {
  const { projects } = useProjects();

  const [createProject] = useCreateProject();
  const [destroyProject] = useDestroyProject();

  return (
    <Wrapper>
      {!!projects.length && (
        <Table>
          <Head>
            <tr key={"table-header"}>
              <TableItem> Name </TableItem>
              <TableItem> Description </TableItem>
              <TableItem> Created At </TableItem>
            </tr>
          </Head>
          <tbody>
            {projects.map(
              ({
                id,
                name,
                description,
                createdAt,
              }: {
                id: string;
                name: string;
                description: string;
                createdAt: string;
              }) => (
                <tr key={`table-row-${id}`}>
                  <TableItem> {name} </TableItem>
                  <TableItem> {description || "-"} </TableItem>
                  <TableItem>
                    {" "}
                    {new Date(createdAt).toLocaleDateString("RU-ru")}{" "}
                  </TableItem>
                  <TableItem>
                    <Button label="Tasks" />
                  </TableItem>
                  <TableItem>
                    <Button label="Edit" color="#7938db" />
                  </TableItem>
                  <TableItem>
                    <Button
                      label="Destroy"
                      color="#eb5369"
                      onClick={() => destroyProject({ id })}
                    />
                  </TableItem>
                </tr>
              )
            )}
          </tbody>
        </Table>
      )}

      <Button
        label="create new project"
        onClick={() => createProject({ name: "test", description: "lol" })}
      />
    </Wrapper>
  );
};

export default ProjectsList;
