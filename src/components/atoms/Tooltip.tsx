import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { MediaQueries } from "../../styles/mediaQueries";

interface TooltipInterface extends TooltipProps {
    backgroundColor?: string,
    color?: string,
    fontVariant?: Variant
}

const MUITooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))<TooltipInterface>(({theme, backgroundColor, color, fontVariant = 'caption'}) => ({
    [`& .${tooltipClasses.tooltip}`] : {
        backgroundColor: backgroundColor && backgroundColor,
        color: color && color,
        ...theme.typography[fontVariant],
        padding: '5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxWidth: '400px',
        maxHeight: '100px',
    },

    [`${MediaQueries.lg}`]: {
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: '350px'
        }
    },

    [`${MediaQueries.md}`]: {
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: '300px'
        }
    },

    [`${MediaQueries.sm}`]: {
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: '250px'
        }
    },

    [`${MediaQueries.xs}`]: {
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: '200px'
        }
    }
}));

export default MUITooltip;