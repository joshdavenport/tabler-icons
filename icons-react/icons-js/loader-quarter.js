import * as React from "react";

const IconLoaderQuarter = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-loader-quarter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={12} y1={6} x2={12} y2={3} /><line x1={6} y1={12} x2={3} y2={12} /><line x1={7.75} y1={7.75} x2={5.6} y2={5.6} /></svg>;

export default IconLoaderQuarter;