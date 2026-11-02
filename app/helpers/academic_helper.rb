module AcademicHelper
  COMPANY_URL = "https://www.anartssoftware.com".freeze
  CONTACT_EMAIL = "contact@anartssoftware.com".freeze

  SOCIAL_LINKS = [
    { label: "Email",     url: "mailto:#{CONTACT_EMAIL}",                                icon: "fa-solid fa-at" },
    { label: "GitHub",    url: "https://github.com/AlbertShqipe",                        icon: "fa-brands fa-github" },
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/albert-nikolli-b81554301/",  icon: "fa-brands fa-linkedin-in" },
    { label: "Instagram", url: "https://www.instagram.com/albertnikolli/",               icon: "fa-brands fa-instagram" },
    { label: "Facebook",  url: "https://www.facebook.com/nikolli.albert/",               icon: "fa-brands fa-facebook-f" }
  ].freeze

  # tag: key under home.forth_section.tags; light: dark artwork that needs a light tile.
  # Raya Biarritz, Rhegion Caffè and International Dance Show are kept exactly as they were.
  PORTFOLIO_PROJECTS = {
    cultural: [
      { name: "Opéra de Paris",             url: "https://www.operadeparis-auditions.fr/",         image: "an/opera-paris.png",         tag: :an_audition },
      { name: "Opéra de Lyon",              url: "https://www.opera-lyon-auditions.com/",          image: "an/opera-lyon.png",          tag: :an_audition },
      { name: "Opera Ballet Vlaanderen",    url: "https://www.operaballet-auditions.be/",          image: "an/obv.png",                 tag: :an_audition },
      { name: "Les Ballets de Monte-Carlo", url: "https://www.balletsdemontecarlo-auditions.com/", image: "an/ballets-monte-carlo.png", tag: :an_audition },
      { name: "Ballet Junior de Genève",    url: "https://www.edgeneve-auditions.com/",            image: "an/bjg.png",                 tag: :an_audition },
      { name: "Limonada Dance Company",     url: "https://www.limonada-auditions.com/",            image: "an/limonada.png",            tag: :an_audition },
      { name: "I AM NOT Company",           url: "https://www.compagnieiamnot.fr/",                image: "an/iamnot.png",              tag: :website },
      { name: "Concours Entrelacé",         url: "https://www.concours-entrelace.com",             image: "an/concours-entrelace.png",  tag: :web_app },
      { name: "Julian Nicosia",             url: "https://www.juliannicosia.com/",                 image: "an/julian-nicosia.png",      tag: :website },
      { name: "International Dance Show",   url: "https://www.internationaldanceshow.com/",        image: "ids.png" }
    ],
    other: [
      { name: "Skauter",                    url: "https://www.skauter.al",                         image: "an/skauter.png",             tag: :saas },
      { name: "Domuskey Stay",              url: "https://www.domuskey-stay.it/",                  image: "an/domuskey.png",            tag: :rental },
      { name: "Pierre Michou Saucet",       url: "https://www.michou-saucet.fr",                   image: "an/pierre.png",              tag: :website },
      { name: "CPilates Reformer",          url: "https://www.cpilatesreformer.com/",              image: "an/cpilates.png",            tag: :website },
      { name: "OB Laser",                   url: "https://www.oblaser.it/",                        image: "an/ob-laser.png",            tag: :website },
      { name: "Raya Biarritz",              url: "https://www.raya-biarritz.com/",                 image: "logoLight.png" },
      { name: "Rhegion Caffè",              url: "https://www.rhegioncaffe.it/",                   image: "rhegion.png" }
    ]
  }.freeze

  # AN Audition clients, shown as the "trusted by" strip
  AN_AUDITION_CLIENTS = PORTFOLIO_PROJECTS[:cultural].select { |p| p[:tag] == :an_audition }.freeze

  # value, suffix, key under home.company.stats
  AN_AUDITION_STATS = [[5000, "+", :candidates], [10, "", :sessions], [5, "", :organisations], [15, "min", :setup]].freeze

  SKILLS_USING = %w[rails ruby javascript html5 css3 bootstrap sass git github postgresql salesforce canva figma].freeze
  SKILLS_LEARNING = %w[java angular php].freeze

  SKILL_LABELS = { "html5" => "HTML5", "css3" => "CSS3", "postgresql" => "PostgreSQL", "php" => "PHP",
                   "javascript" => "JavaScript", "github" => "GitHub" }.freeze

  def skill_label(skill)
    SKILL_LABELS.fetch(skill, skill.capitalize)
  end

  def project_host(url)
    URI.parse(url).host.delete_prefix("www.")
  end
end
