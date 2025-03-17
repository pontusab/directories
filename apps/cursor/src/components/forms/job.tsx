"use client";

import { createJobListingAction } from "@/actions/create-job-listing";
import { CompanySelect } from "@/components/company/company-select";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getFormattedJobPlanPrice } from "@/utils/pricing";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  company_id: z.string({
    required_error: "Please select a company.",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  location: z.string().min(1, {
    message: "Location is required.",
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
  workplace: z.enum(["On site", "Remote", "Hybrid"]),
  experience: z.string().optional(),
  plan: z.enum(["standard", "featured", "premium"] as const, {
    required_error: "Please select a plan.",
  }),
});

export function JobForm() {
  const { execute, isExecuting } = useAction(createJobListingAction);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_id: "",
      title: "",
      location: "",
      description: "",
      link: "",
      workplace: "On site",
      experience: "",
      plan: "standard",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    execute({
      company_id: values.company_id,
      title: values.title,
      location: values.location,
      description: values.description,
      link: values.link,
      workplace: values.workplace,
      experience: values.experience ?? null,
      plan: values.plan,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6 pb-6">
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job listing title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Senior Software Engineer"
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
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New York"
                    {...field}
                    className="placeholder:text-[#878787] border-border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="workplace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workplace Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select workplace type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="On site">On site</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of experience</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="4"
                      {...field}
                      className="placeholder:text-[#878787] border-border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job listing description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a description of the role..."
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
                <FormLabel>Link to job page</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://your-company.com/careers/job-posting"
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
                      <div className="text-xl mt-2">$99 one-time</div>
                      <div className="text-sm text-[#878787] mt-2">
                        Get your job listed in our job board and reach 250k+
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
                      <div className="text-xl mt-2">$299 one-time</div>
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
                    <div className="text-xl mt-2">$999 one-time</div>
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
            : `Submit & Pay (${getFormattedJobPlanPrice(form.watch("plan"))})`}
        </Button>
      </form>
    </Form>
  );
}
