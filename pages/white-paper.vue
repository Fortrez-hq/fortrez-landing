<template>
  <div class="h-screen">
    <NavBar
      class="block md:hidden absolute min-w-full z-40"
      @state="blur_background"
    />
    <div
      :class="{
        'backdrop-blur-none blur-sm fixed w-full h-full z-30 ': is_open,
      }"
    ></div>

    <div class="p-5">
      <div class="py-40 w-full lg:w-5/6 mx-auto">
        <div class="flex flex-col h-full gap-14 text-justify">
          <div class="flex flex-col gap-10">
            <p class="text-3xl text-text-primary">Introduction</p>
          </div>
          <div class="flex flex-col text-text-secondary gap-5 text-lg">
            <p class="text-xl text-text-primary">Challenges</p>
            <p>
              Content creators face several challenges with putting out their
              content. Some of the major problems faced by content creators
              include:
            </p>
            <WhitepaperText title="Creating high-quality content">
              <template #text
                >One of the most significant challenges for content creators is
                creating high-quality content that engages their audience.
                Creating compelling and valuable content that stands out in a
                crowded digital landscape requires time, effort, and
                creativity.</template
              >
            </WhitepaperText>
            <WhitepaperText title="Getting discovered">
              <template #text
                >Even if content creators create excellent content, it's
                challenging to get discovered. With millions of pieces of
                content being published every day, content creators must find
                ways to get their content in front of their target
                audience.</template
              >
            </WhitepaperText>
            <WhitepaperText title="Building an audience">
              <template #text
                >Building an audience is a long-term challenge for content
                creators. It takes time and effort to build a loyal following of
                people who would regularly engage with your content.</template
              >
            </WhitepaperText>
            <WhitepaperText title="Monetizing content">
              <template #text
                >Content creators face a significant challenge in monetizing
                their content. Generating revenue from content can be extremely
                difficult, and the monetization methods available to content
                creators depend on their content type and the platform they
                use.</template
              >
            </WhitepaperText>
            <WhitepaperText title="Dealing with copyright issues">
              <template #text
                >Content creators must be careful not to infringe on copyright
                laws when creating content. They need to ensure that they have
                the necessary licenses and permissions to use third-party
                content and that their content does not violate any copyright
                laws.
              </template>
            </WhitepaperText>
            <WhitepaperText title="Staying relevant">
              <template #text
                >Content creators need to stay relevant by adapting to changes
                in their industry and audience preferences. They need to
                continually learn and improve their skills to keep up with the
                evolving digital landscape.</template
              >
            </WhitepaperText>
            <WhitepaperText title="Balancing quality and quantity">
              <template #text
                >Content creators must find the right balance between creating
                high-quality content and producing enough content to keep their
                audience engaged and interested. This can be a difficult balance
                to strike.</template
              >
            </WhitepaperText>
          </div>
          <div class="flex flex-col text-text-secondary gap-5 text-lg">
            <p class="text-xl text-text-primary">Why Fortrez Solution</p>
            <p>
              Overall, content creation is a challenging and competitive field
              that requires creativity, persistence, and adaptability in order
              to succeed. Fortrez has identified these challenges faced by
              content creators and below are ways how fortrez is solving these
              challenges.
            </p>
            <WhitepaperText title="Content Diversification">
              <template #text>
                To keep your audience engaged, it's important to diversify your
                content. Consider experimenting with new formats, such as video
                or podcasts, or creating content on new topics all in one place
                with a dedicated profile and account to your name.
              </template>
            </WhitepaperText>
            <WhitepaperText title="Collaboration">
              <template #text>
                Collaborating with other content creators can help you reach new
                audiences and create content that is more engaging and diverse.
                Fortrez bring together content creators across the globe with
                easy access.
              </template>
            </WhitepaperText>
            <WhitepaperText title="Stay up-to-date with industry trends">
              <template #text>
                To stay relevant and competitive, it's important to stay
                up-to-date with industry trends and best practices. Attend
                conferences and read industry publications to stay informed.
                Fortrez is an all encompassing platform that brings to the fore,
                contents from different fields, sectors and industries.
              </template>
            </WhitepaperText>
            <WhitepaperText title="Engage with your audience">
              <template #text>
                Engaging with your audience can help build loyalty and increase
                engagement. Respond to comments and messages, and consider
                hosting Q&A sessions or other interactive events. With fortrez,
                every act of engagement is rewarding, as users earn for
                engaging.
              </template>
            </WhitepaperText>
          </div>
          <div class="flex flex-col text-text-secondary gap-5 text-lg">
            <p class="text-xl text-text-primary">Mechanism</p>
            <p>
              Every time a member’s post or comment is engaged, they receive
              rewards. The higher a members level, the more rewards they can
              earn.
            </p>
            <p>
              At level one, members earn 0.2 points per boost-up. Each point on
              the platform is convertible into USD upon launch of the token.
              Boosting is free. To prevent “boost spam”, a boost down function
              is also included that allows for the members of the Fortrez
              community to self-regulate content.
            </p>
            <p>
              Fortrez is kickstarting the sharing economy like never before, in
              a model that allows others to invest in you and your content.
            </p>
            <p>
              When another member shares your post, and it’s then boosted up on
              their feed, the profit is split at a 50:50.
            </p>
            <p>
              Fortrez will thrive on original content from all spheres of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const is_open = ref(false);

const blur_background = (args) => {
  is_open.value = args;
};
</script>

<style scoped></style>
