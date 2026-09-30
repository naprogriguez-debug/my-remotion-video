import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {
  title: string;
  subtitle: string;
};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={90}
      fps={30}
      width={1280}
      height={720}
      defaultProps={{
        title: "Hello, Remotion",
        subtitle: "Rendered on GitHub Actions",
      }}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const MyComponent: React.FC<Props> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b1020",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 96,
          fontWeight: 700,
          color: "white",
          opacity: titleIn,
          transform: `translateY(${interpolate(titleIn, [0, 1], [40, 0])}px)`,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 40,
          color: "#8ab4ff",
          marginTop: 24,
          opacity: subtitleOpacity,
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};
