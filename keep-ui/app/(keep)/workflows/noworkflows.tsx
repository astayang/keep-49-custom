import React from "react";
import { Button } from "@tremor/react";
import { useRouter } from "next/navigation";
import { DynamicImageProviderIcon } from "@/components/ui";
import { EmptyStateCard } from "@/shared/ui";
import { PlusIcon } from "@heroicons/react/20/solid";
const WorkflowsEmptyState = () => {
  const router = useRouter();

  return (
    <div className="mt-4">
      <section className="flex flex-col items-center justify-center mb-10">
        <EmptyStateCard
          noCard
          title="No Workflows Added Yet"
          description="Start from scratch, or browse through workflow templates"
          icon={() => (
            <DynamicImageProviderIcon
              src="/icons/workflow-icon.png"
              alt="loading"
              width={200}
              height={200}
            />
          )}
        >
          <Button
            icon={PlusIcon}
            className="mt-4 px-6 py-2"
            color="orange"
            variant="primary"
            onClick={() => {
              router.push("/workflows/builder");
            }}
          >
            Create New Workflow
          </Button>
        </EmptyStateCard>
      </section>
    </div>
  );
};

export default WorkflowsEmptyState;
