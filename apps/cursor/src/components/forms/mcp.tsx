"use client";

import { createMCPListingAction } from "@/actions/create-mcp-listing";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getFormattedMCPPlanPrice } from "@/utils/pricing";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CompanySelect } from "../company/company-select";
import UploadLogo from "../upload-logo";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(500, {
      message: "Description must be less than 500 characters.",
    }),
  link: z.string().url({
    message: "Please enter a valid job posting URL.",
  }),
  logo: z.string().optional(),
  company_id: z.string().optional(),
  plan: z.enum(["standard", "featured", "premium"] as const, {
    required_error: "Please select a plan.",
  }),
});

export function MCPForm() {
  const { execute, isExecuting } = useAction(createMCPListingAction);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      link: "",
      logo: "",
      company_id: "",
      plan: "standard",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    execute({
      name: values.name,
      description: values.description,
      link: values.link,
      logo: values.logo ?? null,
      company_id: values.company_id ?? null,
      plan: values.plan,
    });
  };

  const setLogo = (logo: string) => {
    form.setValue("logo", logo);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6 pb-6">
          <UploadLogo prefix="mcp" onUpload={setLogo} />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Resend"
                    {...field}
                    className="placeholder:text-[#878787] border-border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a description..."
                    {...field}
                    className="placeholder:text-[#878787] border-border min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link to install instructions</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://github.com/resend/resend-mcp"
                    {...field}
                    type="url"
                    className="placeholder:text-[#878787] border-border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <CompanySelect
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select option</FormLabel>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      className={`p-4 border rounded-lg cursor-pointer text-left ${
                        field.value === "standard"
                          ? "border-primary"
                          : "border-border"
                      }`}
                      onClick={() => field.onChange("standard")}
                    >
                      <div>Standard</div>
                      <div className="text-xl mt-2">Free</div>
                      <div className="text-sm text-[#878787] mt-2">
                        Get your MCP listed in our MCP board and reach 250k+
                        developers each month.
                      </div>
                    </button>
                    <button
                      type="button"
                      className={`p-4 border rounded-lg cursor-pointer text-left ${
                        field.value === "featured"
                          ? "border-primary"
                          : "border-border"
                      }`}
                      onClick={() => field.onChange("featured")}
                    >
                      <div>Featured</div>
                      <div className="text-xl mt-2">$299/m</div>
                      <div className="text-sm text-[#878787] mt-2">
                        Get prime placement in the featured section at the top
                        for maximum visibility.
                      </div>
                    </button>
                  </div>
                  <button
                    type="button"
                    className={`p-4 border rounded-lg cursor-pointer text-left ${
                      field.value === "premium"
                        ? "border-primary"
                        : "border-border"
                    }`}
                    onClick={() => field.onChange("premium")}
                  >
                    <div>Premium</div>
                    <div className="text-xl mt-2">$499/m</div>
                    <div className="text-sm text-[#878787] mt-2">
                      Get maximum exposure with featured placement, email
                      promotion to our entire developer network, social media
                      promotion, and homepage spotlight.
                    </div>
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isExecuting}>
          {isExecuting
            ? "Saving..."
            : form.watch("plan") === "standard"
              ? "Submit"
              : `Submit & Pay (${getFormattedMCPPlanPrice(form.watch("plan"))})`}
        </Button>
      </form>
    </Form>
  );
}
