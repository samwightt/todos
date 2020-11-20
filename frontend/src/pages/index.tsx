import { useState, Suspense, useEffect, unstable_useTransition } from "react";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1 />
        {/* <NewTagsComponent />
        <ListTags />
        <NewTasksComponent />
        <TasksListComponent /> */}
      </Suspense>
    </Layout>
  );
}
